import animations from "./animations";

const defaultConfig = {
  duration: 350,
  animationName: "linear",
  offsetY: 0,
};

function smoothScroll(config) {
  if (config === undefined) {
    config = defaultConfig;
  }

  const {
    duration = defaultConfig.duration,
    target,
    animationName = defaultConfig.animationName,
    offsetY = defaultConfig.offsetY,
  } = config;

  if (config.target === undefined) {
    console.error("property 'target' is required");
    return;
  }

  if (!(target instanceof HTMLElement)) {
    console.error("target must be instanceof HTMLElement");
    return;
  }

  const targetPositionTop = target.getBoundingClientRect().top;
  const startPosition = window.pageYOffset; // расстояние от верха документа до текущего местоположения на странице
  const targetYCoord = targetPositionTop + startPosition - offsetY; // Тут получаем координату места, куда должен привести нас скролл, то, куда Я должен прийти
  const direction = startPosition > targetYCoord ? "toTop" : "toBottom";
  const diff =
    direction === "toTop"
      ? startPosition - targetYCoord // Scroll from bottom to top
      : targetYCoord - startPosition; // Scroll from top to bottom

  let startTime = null; // Время начала

  function animationScroll(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }
    /** Расчет времени, сколько его прошло */
    var timeElapsed = currentTime - startTime;

    /** Тут считаем шаг, на который будет скролл */
    var toPoint = getCountedYCoord(timeElapsed, startPosition, diff, duration);

    window.scrollTo(0, toPoint); // scroll

    if (timeElapsed < duration) {
      requestAnimationFrame(animationScroll); // Повторный запуск пока не истекло время
    }
  }

  /**
   * Внутри высчитывает шаг и применяет функцию анимации
   */
  function getCountedYCoord(t, b, c, d) {
    const animation = animations[animationName]; // Получаем функцию анимации
    const step = animation(t, c, d);

    let end = direction === "toTop" ? b - step : step + b;

    switch (direction) {
      case "toTop":
        return end > targetYCoord ? end : targetYCoord;
        break;
      case "toBottom":
        return end > targetYCoord ? targetYCoord : end;
        break;
      default:
        return end;
    }
  }

  requestAnimationFrame(animationScroll); // Самый первый запуск анимации
}

export default smoothScroll;
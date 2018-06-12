export const linearProgressBarDriverFactory = ({element}) => {
    const getProgressBarForeGroundStyle = () => window.getComputedStyle(element.querySelector('[data-hook="progressbar-foreground"]'));
    const getProgressBarBackgroundStyle = () => window.getComputedStyle(element.querySelector('[data-hook="progressbar-background"]'));
    const getElement = dataHook => element.querySelector(`[data-hook="${dataHook}"]`)
    
    const driver = {
        exists: () => !!element,
        getWidth: () => getProgressBarForeGroundStyle().width,
        getBackgroundColor: () => getProgressBarBackgroundStyle().background,
        getForegroundColor: () => getProgressBarForeGroundStyle().background,
        isSuccessIconDisplayed: () => !!getElement('success-icon'),
        isErrorIconDisplayed: () => !!getElement('error-icon'),
        isPercentagesProgressDisplayed: () => !!getElement('progress-percentages'),
        getPercentagesProgressText: () => getElement('progress-percentages').querySelector('span').innerHTML,
    }

    return driver;
};
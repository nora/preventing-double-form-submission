(()=> {
  const utils = {
    sleep: ms => new Promise(resolve => setTimeout(resolve, ms = 3000)),
    async addClassTemporarily ({ classList }, className, ms) {
      classList.add(className);
      await this.sleep(ms);
      classList.remove(className);
    },
  };

  const preventFormDoubleSubmission = ({ target }) => {
    if (target.matches('[type=button]')) utils.addClassTemporarily(target, 'js-submit-disabled');

    utils.addClassTemporarily(target, 'js-submit-disabled');
  };

  window.addEventListener('click', preventFormDoubleSubmission);
})();

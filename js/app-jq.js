$(()=> {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
 
  const preventFormDoubleSubmission = async ({ target, preventDefault }) => {
    const disabledButtonClassName = 'js-submit-disabled';

    if ($(target).hasClass(disabledButtonClassName)) {
      preventDefault();
      return;
    }

    $(target).addClass(disabledButtonClassName);
    await sleep(3000);
    $(target).removeClass(disabledButtonClassName);
  };
  
  $(':submit').on('click', preventFormDoubleSubmission);
});

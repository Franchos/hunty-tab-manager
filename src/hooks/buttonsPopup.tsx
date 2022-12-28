export const closeTab = (id: number) => {
  chrome.tabs.remove(id);
};

export const goToOptions = () => {
  chrome.tabs.create({
    url: "chrome-extension://nidhbdhncaappiljdecmmmmpokffcbdf/hunty.html",
  });
};

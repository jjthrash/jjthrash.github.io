function recordOutboundLink(link, category, action) {
  try {
    var pageTracker=_gat._getTracker("UA-17150690-1");
    pageTracker._trackEvent(category, action);
    setTimeout('document.location = "' + link.href + '"', 100);
  }catch(err){};
  return true;
}

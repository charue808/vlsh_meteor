Template.landingPage.helpers({
  title: function() {
    return PageContents.findOne().title;
  },
  content: function() {
    return PageContents.findOne().content;
  }
});

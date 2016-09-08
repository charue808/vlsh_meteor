FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render('mainLayout', {content: 'landingPage'})
  }
});


FlowRouter.route('/about', {
  action: function() {
    BlazeLayout.render('mainLayout', {content: 'about'})
  }
});

FlowRouter.route('/contact', {
  action: function() {
    BlazeLayout.render('mainLayout', {content: 'contact'})
  }
});

FlowRouter.route('/supporters', {
  action: function() {
    BlazeLayout.render('mainLayout', {content: 'support'})
  }
});

FlowRouter.route('/payment', {
  action: function() {
    BlazeLayout.render('mainLayout', {content: 'payment'})
  }
});

var volunteerRoutes = FlowRouter.group({
    prefix: "/volunteers",
    name: "volunteers"
});


volunteerRoutes.route('/', {
  action: function() {
    BlazeLayout.render('mainLayout', {content: 'volunteers'})
  }
});

volunteerRoutes.route('/attorneys', {
  action: function() {
    BlazeLayout.render('mainLayout', {content: 'attorneys'})
  }
});

volunteerRoutes.route('/law-students-paralegals', {
  action: function() {
    BlazeLayout.render('mainLayout', {content: 'lawStudents'})
  }
});

var servicesRoutes = FlowRouter.group({
  prefix: "/services",
  name: "services"
});

servicesRoutes.route('/', {
  action: function() {
    BlazeLayout.render('mainLayout', {content: 'servicesInfo'})
  }
});

servicesRoutes.route('/consumer-debt-relief', {
  action: function() {
    BlazeLayout.render('mainLayout', {content: 'consumerDebt'})
  }
});

servicesRoutes.route('/family-law', {
  action: function() {
    BlazeLayout.render('mainLayout', {content: 'familyLaw'})
  }
});

servicesRoutes.route('/district-court', {
  action: function() {
    BlazeLayout.render('mainLayout', {content: 'districtCourt'})
  }
});

servicesRoutes.route('/veteran-legal-assistance', {
  action: function() {
    BlazeLayout.render('mainLayout', {content: 'veteransAssist'})
  }
});

servicesRoutes.route('/estate-planning', {
  action: function() {
    BlazeLayout.render('mainLayout', {content: 'estatePlanning'})
  }
});



FlowRouter.route('/admin', {
  action: function() {
    BlazeLayout.render('noHeadLayout', {content: 'adminPanel'})
  }
});

//get the settings for admin
Template.admin.app = function(){
    return Settings.find().fetch();
}

//get the list of organizations for the admin to edit
Template.admin.organizations = function(){
    return Organizations.find().fetch();
}

//events handler
Template.admin.events(
{
    
})
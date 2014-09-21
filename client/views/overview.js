//get the variables
Template.overview.organizations = function(){
    return Organizations.find();
}

Template.overview.fleets = function(){
    return Fleets.find();
}

Template.overview.fleetElements = function(){
    return FleetEleements.find();
}

Template.overview.ships = function(){
    return Ships.find();
}
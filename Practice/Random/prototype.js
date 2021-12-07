function Creature(genus, species) {
    this.genus = genus,
    this.species = species,
    this.scientificName = function () {
        return this.genus + " " + this.species;
    }    
}


Creature.prototype.kingdom = "animalia";

var leopard  = new Creature("Panthera", "Padris");
var sunBear = new Creature("Helarctos", "Malayanus");


console.log(leopard.kingdom);

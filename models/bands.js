
class Bands {

    constructor(){
        this.bands= [];
    }

    addBand( band= new Band()){
        this.band.push(band);
    }

    getBands(){
        return this.bands;
    }

    deleteband(id=''){
        this.bands = this.bands.filter(bad => band.id !== id);
        return this.bands;
    }

    voteBand( id= ''){
        this.bands= this.bands.map( band => {
            if(band.id == id){
                band.votes ++;
                return band;
            }else{
                return band;
            }
        });
    }


}

module.exports.Bands;
angular.module("form",[])
.factory("form", function(){
    var formData = [];
    return{
        addStat: function(id, chest, thighs, arms, forearms, waist){
            var addedToExistingStat = false;
            for(var i=0; i < formData.length; i++){
                if(formData[i].id = id){
                    formData[i].count++;
                    addedToExistingStat = true;
                    break;
                }
            }
            if(!addedToExistingStat){
                formData.push({
                    count:1, id: id, chest: chest, thighs: thighs, arms: arms, forearms: forearms, waist: waist
                });
            }
        },
        
        removeStat: function(id){
            for(var i = 0; i<formData.length; i++){
                if(formData[i].id == id){
                    formData.splice(i,1);
                    break;
                
                }
            }
        },
        getStats: function(){
            return formData;
        }
    }
});
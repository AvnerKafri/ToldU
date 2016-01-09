/**
 * Created by Avner on 1/8/2016.
 */
/// <reference path="../../typings/tsd.d.ts" />

  //// <reference path="/src/models/tuldu.d.ts" />

module toldu.services{


  export class ChannelsServices{
    static $inject=['$q','$timeout'];

    constructor(private $q:angular.IQService,private $timeout){

    }
    getChannels(){
      var  self=this;
      return  this.$q<models.Channel[]>((resolve)=>{
        self.$timeout(()=>{

          var arr :models.Channel []=[];
         // var nbaChannel:models.Channel;
          for (let i=0;i<10 ;i++){
           let nbaChannel={
              id:'mok'+i,
              name:'Nba-'+i,
              bets:[]
            };
            arr.push(nbaChannel);
          }

          resolve(arr)


        })
      });

      /*  return Q.Promise<any>((resolve, reject) => {
       resolve();
       }*/

    }

  }

  angular.module('toldu.services').service('ChannelsServices',ChannelsServices);
}


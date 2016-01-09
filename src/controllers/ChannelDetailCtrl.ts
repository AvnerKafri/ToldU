/**
 * Created by Avner on 1/9/2016.
 */


/// <reference path="../../typings/tsd.d.ts" />

module toldu.controllers {
  class ChannelDetailCtrl {
    static  $inject = ['ChannelsServices'];


    //channels:models.Channel[];

    constructor(ChannelsServices:services.ChannelsServices) {
      ChannelsServices.getChannels().then((channels)=> {
      // this.channels = channels;
      })


    }
  }

  angular.module('toldu.controllers').controller('ChannelDetailCtrl', ChannelDetailCtrl);
}


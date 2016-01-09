/**
 * Created by Avner on 1/8/2016.
 */

declare module toldu.models{

  export interface Channel{
    id:string
    name:string;
    bets:Bet[];


  }
  export interface Bet{
    name:string;


  }

}



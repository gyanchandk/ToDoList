import { Component ,OnInit} from '@angular/core';


class Hero{
 
   name :string;
   id:number;
   timeStamp:number;

  constructor( nameN:string,idN:number,timeN:number){
       
        this.name = nameN;
        this.id=idN;
        this.timeStamp=timeN;
       
  }

  
}


@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  
  styleUrls:['app.component.css'],

 
 
})




export class AppComponent implements OnInit {
    title = "toDo list"

    amount=2987.90;
    t=1500552000;
  
     Heroes:Hero[]=[];
     dHero:Hero[]=[];
     heroText:string="";
     msg:string;
     errMsg:string;
     totalTaskToComplete:number;
     completedTask:number;
     today:number;
     alreadyAddedTask:string;
    

     addHero(msg:string){
       
         if(msg.length==0){
             
             this.errMsg = "Task is not clear";
         }
         else if(this.duplicateTask(msg)){
              this.errMsg="Task is already in the list";
         }
             
         else{
              
              this.today=Date.now();
              this.Heroes.push(new Hero(msg,2,this.today));
              this.errMsg="";
              this.heroText="";
              this.totalTaskToComplete=this.Heroes.length;
         }    
           
        
     }

     duplicateTask(msg:string):number{

          for(var i=0;i<this.Heroes.length;i++)
          {
             if( msg==this.Heroes[i].name)
             {
                return 1;
             }
              
          }
            
          return 0;
     }
     
     markAsComplete(hero:Hero){
           
           this.addDHero(hero);
           this.deleteHero(hero);
           

     }



     editHero(hero:Hero){
       this.heroText=hero.name;
       this.deleteHero(hero);
       this.totalTaskToComplete=this.Heroes.length;
     }
     

     deleteHero(hero:Hero){
       
        this.Heroes = this.Heroes.filter(Heroes => Heroes.name !== hero.name);
         this.totalTaskToComplete=this.Heroes.length;
     }
    
    reset(){
      this.heroText="";
    }

    dismiss(){
      this.errMsg="";
      this.heroText="";
    }

    addAnyWay(msg:string){
          if(msg.length==0){
            msg="Nothing to do";
          }
          while(this.duplicateTask(msg)){
              msg=msg+".";
          }
          this.addHero(msg);

          this.heroText="";
    }

    addDHero(hero:Hero){
       
       this.dHero.push(new Hero(hero.name,2,Date.now()));
       this.msg=hero.name;
       this.completedTask=this.dHero.length;
     }

    deleteDHero(hero:Hero){
       
        this.dHero = this.dHero.filter(dHero => dHero.name !== hero.name);
        this.completedTask=this.dHero.length;
     }

   
    ngOnInit(){
      
     
      this.addHero("Buy daily items from new-market");
      this.addHero("Registration for current semester");

      this.addDHero(new Hero("this is completed task",2,Date.now()));

    }
    
   
}



const app=Vue.createApp({
data(){
  return{
    about:false,
    mainone:"",
    updatevalue:"",
    mainarray:[]
    }
  },methods: {
    addit:function(){
      if(this.mainone !=""){
        const maindata={
          id:Date.now(),
          title:this.mainone,
          state:false,
          updatebtn:false
        }
        this.mainarray.push(maindata);
        localStorage.setItem("task",JSON.stringify(this.mainarray))
        this.mainone="";
        }
      },
      deleteit:function(e){
        this.mainarray.splice(e,1)
        localStorage.setItem("task",JSON.stringify(this.mainarray))
      },
      doit:function(e){
        this.mainarray[e].state=!this.mainarray[e].state;
        localStorage.setItem("task",JSON.stringify(this.mainarray))
      },
      updatethedata(e){
        this.mainarray[e].updatebtn=!this.mainarray[e].updatebtn;
        
        this.mainarray[e].title=this.updatevalue;
        this.updatevalue="";
        localStorage.setItem("task",JSON.stringify(this.mainarray))
      }
    },mounted() {
      if(window.localStorage.getItem("task")){
        return this.mainarray=JSON.parse(window.localStorage.getItem("task"))
      }
      // localStorage.clear()
    }
})

app.mount(`#app`)
class StaticGenarator {
   
   private constructor() {}

   public static  NextID(lastUsedId:string) : string{
    //lastUsedId ->  xxx-123456

    //123456
    let numbed_value : number = Number(lastUsedId.substring(4));

    //xxx
    let coded_value : string = lastUsedId.substring(0,3)

    //123456 + 1
    let next_numberd_value : string = String(numbed_value + 1);

    return coded_value + "-" + next_numberd_value.padStart(6,"0");
   }
}

export default StaticGenarator;
export class RecipeDetails {
    constructor(
        public uri:string,
        public label:string,
        public image:string,
        public source:string,
        public url:string,
        public shareAs:string,
        public yieldNum: number,
        public dietLabels: any[],
        public healthLabels:any[],
        public cautions :any[],
        public calories: number,
        public ingredients: any[],
        public ingredientLines: string[],
        public totalDaily: object,
        public totalWeight: number,
        public totalTime: number,
        public totalNutrients: object,
        public digest:object,
       
        
    ){}
}

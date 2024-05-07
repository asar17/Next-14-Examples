export default function Features ({params}:{
    params:{
        features: string[];
    }
}){
    if(params?.features?.length ===2){
        return(
            <div>
                There are written features {params.features[0]} {params.features[1]}
            </div>
        )
    }
    else if(params?.features?.length ===1){
        return(
            <div>
                 There are written features {params.features[0]}
            </div>
        )
    }
    return(
        <div>
            There is no features
        </div>
    )
}
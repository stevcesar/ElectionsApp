import { Grid } from "@mui/material"
import { CardCandidate } from "./CardCandidate"
import { useState } from "react"

export const CandidatesPanel =({value,index,children})=>{
    const [selectedCardId, setSelectedCardId] = useState();
    const handleCardClick=(id)=>{
        setSelectedCardId(id);
    }
    return(
        <div 
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            {value===index && (
                <Grid container spacing={2} padding={2}>
                    {children.map(
                        ({
                        _id,
                        picturePath,
                        firstName,
                        lastName,
                        politicalParty
                    })=>(
                        <Grid key={_id}item xs={12} sm={6} md={4} >
                            <CardCandidate
                                key={_id}
                                _id={_id}    
                                picturePath={picturePath}
                                firstName={firstName}
                                lastName={lastName}
                                politicalParty={politicalParty}                                                        
                                onClick={handleCardClick}
                                isSelected={selectedCardId === _id}
                            />
                        </Grid>
                    )
                    )}
                </Grid>
            )}
        </div>
    )
}
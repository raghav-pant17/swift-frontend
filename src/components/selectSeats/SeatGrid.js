import { Grid } from '@mui/material';
import clsx from 'clsx'
import './selectSeats.css'
import { useState } from 'react';


export default function SeatGrid(props){

    var occupiedSeats = props.occupiedSeats || []
    var selectedSeats = props.selectedSeats || []
    var setSelectedSeats = props.setSelectedSeats || (()=>{})
    var numSeats = props.numSeats || 0;

    const seats = (() => {
        var arr = [" ",0]
        for(let i = 0; i<10; i++){
            arr.push(String.fromCharCode('A'.charCodeAt(0) + i));
            for(let j = 1; j<=10; j++){
                arr.push(String.fromCharCode('A'.charCodeAt(0) + i) + j.toString())
            }
        }
        return arr;
    })();
    
    console.log("generated array: ")
    console.log(seats)

    function handleSelectedState(seat){
        console.log("Clicked seat = " + seat)
        const isSelected = selectedSeats.includes(seat) 
        if (isSelected) {
                setSelectedSeats(selectedSeats.filter(selectedSeat => selectedSeat !== seat));
            
        } else if(selectedSeats.length < numSeats){
            setSelectedSeats([...selectedSeats, seat])
        }
    }

    return(
        <div className='seats'>
            {
                seats.map(seat=>{

                    if(seat=="0"){
                        console.log("inside if block")
                        return Array.from({length: 10}, (x, i) => i+1).map((i)=>{
                            console.log(i)
                            return (
                                <span
                                    key={i}
                                    className='seatNumber'
                                > {i} </span>
                            )
                        })
                    }

                    if(seat.length==1){
                        return <span
                            key={seat}
                            className= {clsx(
                                'seatNumber',
                                (seat=="A" || seat=="I") && 'added-botton-margin',
                              )}
                        > {seat} </span>
                    }

                    const isSelected = selectedSeats.includes(seat)
                    const isOccupied = occupiedSeats.includes(seat)
                    
                    return (
                        <span
                          tabIndex="0"
                          key={seat}
                          className={clsx(
                            'seat',
                            (seat[0]=="A" || seat[0]=='I') && 'added-botton-margin',
                            isSelected && 'selected',
                            isOccupied && 'occupied',
                          )}
                          onClick={isOccupied ? null : () => handleSelectedState(seat)}
                        />
                      )
                })
            }
        </div>
    )
}
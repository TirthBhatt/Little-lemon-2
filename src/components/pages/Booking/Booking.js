import React from 'react';
import { useForm } from 'react-hook-form'; 

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import Dialog from '@mui/material/Dialog'
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";


const schema = yup.object({
    name: yup.string().required("Full name is a required field!"),
    email: yup.string().required("Email is a required field!").email("Email is not valid!"),
    telephone: yup.string().required("Telephone is a required field!").matches(/^[6-9]\d{9}$/, "Phone number must match the form 911"),
    guests: yup.number().min(1, "There must be at least 1 guest!").required("Please specify number of guests per table!"),
    date: yup.string().required("Please select date and time!"),
})

function Form() {


    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
        



    })

    console.log(errors)
    const submitDisabled=false;
    const formSubmit = (data) => {
        console.table(data)
        submitDisabled=true;

    }
    const [open, setOpen] = React.useState(false);
 
    const handleClickToOpen = () => {
        setOpen(true);
    };
    const handleToClose = () => {
        setOpen(false);
    };
    return (
        <div className='BookingForm'>
                 <form onSubmit={handleSubmit(formSubmit)}>
                 <fieldset>
                <div className="field row">
                    <label htmlFor="name" className=' col-6'>Full Name</label>
                    <input type="text" placeholder="John Doe" name="name" {...register("name")} />
                    <span className="error-message">{errors.name?.message}</span>
                </div>
                <div className="field row">
                    <label htmlFor="email" className=' col-6'>Email</label>
                    <input type="text" placeholder="text@email.com" name="email" {...register("email")}/>
                    <span className="error-message">{errors.email?.message}</span>
                </div>
                <div className="field row">
                    <label htmlFor="telephone" className=' col-6'>Telephone</label>
                    <input type="tel" placeholder="233 00 000 0000" name="telephone" {...register("telephone")}/>
                    <span className="error-message">{errors.telephone?.message}</span>
                </div>

                {/*<div className="guestsdate">*/}
                <div className="field occasion row">
                    <label htmlFor="occasion d" className=' col-6'>Occasion (optional)</label>
                    <div className="options col-5">
                        <select name="occasion" {...register("occasion")}>
                            <option value="select">Select occasion</option>
                            <option value="birthday">Birthday</option>
                            <option value="engagement">Engagement</option>
                            <option value="anniversary">Anniversary</option>
                        </select>
                    </div>
                </div>
                <div className="field guest row">
                    <label htmlFor="guests" className=' col-6'>Guests</label>
                    <input type="number" placeholder="2" name="guests" {...register("guests")}/> 
                    <span className="error-message">{errors.guests?.message}</span>
                </div>
                {/*</div>*/}
                        
                <div className="field row">
                    <label htmlFor="date" className=' col-6'>Date & Time</label>
                    <input type="datetime-local" name="date" {...register("date")} />
                    <span className="error-message">{errors.date?.message}</span>
                </div>
                <button className="reserve-btn m-5" type="submit" onClick={handleClickToOpen} disabled='true'>Reserve</button>
                <Dialog open={open} onClose={handleToClose}>
                <DialogTitle>{"How are you?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        I am Good, Hope the same for you!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleToClose}
                        color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
            </fieldset>
        </form>
        </div>
       
  )
}

export default Form
const appointment = require("../models/Appointment");
var mongoose = require("mongoose");

const Appo = mongoose.model("Appointment", appointment)

class AppointmentService {

    async Create(name, email, desciption, cpf, date, time){
        var newAppo = new Appo({
            name,
            email,
            desciption,
            cpf,
            date,
            time,
            finished: false
        });

        try{
            await newAppo.save();
            return true;
        }catch(error){
            console.log(error);
            return false;
        }
        
    }
}

module.exports = new AppointmentService();
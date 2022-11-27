import mongoose from "mongoose"

//connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/widgets', {
    useNewUrlParse: true
});
const widgetSchema = new mongoose.Schema({
    name : {
        type: String
    },
    description : {
        type: String
    },
    price : {
        type: Number
    },
    soldout : {
        type: String
    },
    inventory : {
        type: String
    },
    stores : {
        type: Array
    },

});

const Widgets = mongoose.model('widgets', widgetSchema);

export {Widgets}

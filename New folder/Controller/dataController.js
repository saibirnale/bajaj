


//uses hard coded data here
let user_data = {
  is_success: true,
  user_id: "sai_birnale_10111999",
  email: "saibirnale19992gmail.com",
  roll_number: "210941220157",
  numbers: [],
  alphabets: [],
};

//Post method for
export const getData = async (request, responce) => {
  try {
    const data = request.body.data;

    let numbers = [];
    let alpha = [];


    if(data.length>0){

      data.map((item) => {
        if ((parseInt(item) > 0 || parseInt(item) < 0) && item != "") {
          numbers.push(item);
        } else if (item != "") {
          alpha.push(item);
        }
      });
  
      user_data.alphabets = alpha;
      user_data.numbers = numbers;
      responce.status(200).json(user_data);
      return;
    }else{

      responce.status(203).json({ message:"data not found" });
      return;
    }
 

   
  } catch (error) {
    

    responce.status(400).json({ message: error.message });
  }
};

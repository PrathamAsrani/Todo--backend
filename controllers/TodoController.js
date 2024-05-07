// step 5: define how data is going to store in database

const TodoModal = require("../modals/TodoModal");

// fetch the todos from the DataBase, and send it to the webpage
module.exports.getTodo = async (req, res) => {
  const Todo = await TodoModal.find();
  res.send(Todo);
};

// function to store data in DB
module.exports.saveTodo = async (req, res) => {
  const { text } = req.body;

  // after saving Fetch
  TodoModal.create({
    text,
  }).then((data) => {
    console.log("Added Successfully");
    console.log(data);
    res.send(data); 
  });
};


// Function to edit todo
module.exports.updateTodo = async (req, res) => {
    // take id, and new text
    const {_id, text} = req.body;

    // update it now
    TodoModal
        .findByIdAndUpdate(_id, {text})
        .then(() => {
            res.status(201).send("Updated Successfully...");
        })
        .catch((error) => {
            res.status(300).send("Not updated");
            console.log(error);
        })
}

module.exports.deleteTodo = (req, res) => {
    const {_id} = req.body;

    TodoModal
        .findByIdAndDelete(_id)
        .then(() => {
            res.status(200).send("Deleted Succesfully");
        }).catch((err) => {
            res.status(300).send("Error, can't delete", err);
            console.log(`Error: ${err}`);
        })
}
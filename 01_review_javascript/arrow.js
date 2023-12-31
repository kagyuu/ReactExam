function func1(arg) {
    console.log("FUNC1 " + arg);
}

const func2 = (arg) => {
    console.log("FUNC2 " + arg);
}

func1(1);
func2(2);

const cat = {
  name: "Mike",
  whoami: function() {
    // This is cat.
    console.log(this.name);
  },
  whoareyou : () => {
    // This will be bound at runtime.
    console.log(this.name);
  }
}

cat.whoami();
cat.whoareyou();
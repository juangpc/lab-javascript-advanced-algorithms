function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 8;
}

StackDataStructure.prototype.isEmpty = function () {
  return !this.stackControl.length;
}

StackDataStructure.prototype.canPush = function () {
  return (this.stackControl.length < this.MAX_SIZE);
}

StackDataStructure.prototype.push = function (item) {
  if (this.canPush()){
    this.stackControl.push(item);
    return  this.stackControl;
  }else
    return "Stack Overflow";
}

StackDataStructure.prototype.pop = function () {
  if (this.isEmpty())
    return "Stack Underflow";
  else
    return this.stackControl.pop(); 
}

// StackDataStructure.prototype=Object.create(Array.prototype);
// StackDataStructure.prototype.constructor=StackDataStructure;






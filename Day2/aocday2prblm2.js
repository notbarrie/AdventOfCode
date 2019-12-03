let input = [ /* 1,1,1,4,99,5,6,0,99 */
  1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,2,19,6,23,2,13,23,27,1,9,27,31,2,31,9,35,1,6,35,39,2,10,39,43,1,5,43,47,1,5,47,51,2,51,6,55,2,10,55,59,1,59,9,63,2,13,63,67,1,10,67,71,1,71,5,75,1,75,6,79,1,10,79,83,1,5,83,87,1,5,87,91,2,91,6,95,2,6,95,99,2,10,99,103,1,103,5,107,1,2,107,111,1,6,111,0,99,2,14,0,0 
  ];
  
  
  valueFound = false;
  endProgram = false;
  
  for(let i=0;i <= 99;i++){  
    for(let j=0;j <= 99;j++){
    debugger;
      input[1] = i;
      input[2] = j;
      
      calcInput();
      
      checkVerbNoun(19690720);
    }	 
    
  }
  
  endProgram = false;
  
  function calcInput(){
  endProgram = false;
    for(let i = 0; i< input.length; i += 4){
      /* debugger; */
          if(!endProgram){
          //read current number
        const opcode = input[i];
        //check if number is special number
        if(opcode === 1 || opcode === 2 || opcode == 99 ){
            delegator(opcode, i);
        }
       }   
      }
  }
      
      
      
      
      
      function delegator(opcode, index){
          if(opcode === 99){
            endIntComputer();
        } else if(opcode === 1){
            addCommand(index);
        } else if(opcode === 2){
            multiplyCommand(index);
        }
      }
      
      function multiplyCommand(index){
          const position1 = input[index + 1];
        const position2 = input[index + 2];
        const destination = input[index + 3];
        
        const value1 = input[position1];
        const value2 = input[position2];
        const sum = value1 * value2;
        
        input[destination] = sum;
      }
      
      
      function addCommand(index){
          //I don't need opcode here I don't think
        //get values of the array [index value + 1]
        const position1 = input[index + 1];
        const position2 = input[index + 2];
        const destination = input[index + 3];
        
        const value1 = input[position1];
        const value2 = input[position2];
        const sum = value1 + value2;
        
        input[destination] = sum;
        
      }
      
      
      function endIntComputer(){
      console.log(input);
          endProgram = true;
          input = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,2,19,6,23,2,13,23,27,1,9,27,31,2,31,9,35,1,6,35,39,2,10,39,43,1,5,43,47,1,5,47,51,2,51,6,55,2,10,55,59,1,59,9,63,2,13,63,67,1,10,67,71,1,71,5,75,1,75,6,79,1,10,79,83,1,5,83,87,1,5,87,91,2,91,6,95,2,6,95,99,2,10,99,103,1,103,5,107,1,2,107,111,1,6,111,0,99,2,14,0,0 ];
      }
  
  
  
  function checkVerbNoun(target){
      if(input[0] === target){
      valueFound = true;
      let num = (100*input[1])+input[2];
      console.log(num);
    }
   
  }
  
import { useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

const AddFilter = ({setRadioItem}) => {
  const [position, setPosition] = useState('bottom');
  
  const handleRadioItemChange = (value: string) => {
    setRadioItem(value)
    
    
  }
  
  return (
    <Select onValueChange={handleRadioItemChange}>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Set priority" />
  </SelectTrigger>
  <SelectContent >
    <SelectItem value="high">High</SelectItem>
    <SelectItem value="medium">Medium</SelectItem>
    <SelectItem value="low">Low</SelectItem>
  </SelectContent>
</Select>

  );
};

export default AddFilter;

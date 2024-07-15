// import { $w } from 'wix-sdk';
$w.onReady(function () {
	
    const newValue = 'New Value'; // Set the new value here
// $w('#form1').getFieldValues()
console.log("values",$w('#form1').getFieldValues())


const formValues = {
  last_name: 'gunda',
 
  // Add other form field values as needed
};

$w("#form1").setFieldValues(formValues);
console.log("values",$w('#form1').getFieldValues())
//   $w('#first_name').value = newValue;

});

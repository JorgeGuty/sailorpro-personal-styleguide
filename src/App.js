import React from 'react';

import './App.css';
import { TextExample } from './styleguide/examples/Text.example';
import { FontsExample } from './styleguide/examples/Fonts.example';
import { SelectExample } from './styleguide/examples/Select.example';
import { ListAndTextExample } from './styleguide/examples/ListAndText.example';
import { MultilineExample } from './styleguide/examples/Multiline.example';
import { DateExample } from './styleguide/examples/Date.example';
import { TimeExample } from './styleguide/examples/Time.example';
import { DatetimeExample } from './styleguide/examples/Datetime.example';
import { ToggleExample } from './styleguide/examples/Toggle.example';
import { MainButtonExample } from './styleguide/examples/MainButton.example';
import ImagePointPickerExample from './styleguide/examples/ImagePointPicker.example';
import { MultipleSelectionExample } from './styleguide/examples/MultipleSelection.example';
import { UniqueSelectionExample } from './styleguide/examples/UniqueSelection.example';
import { MultipleSelectExample } from './styleguide/examples/MultipleSelect.example';
import CKEditorExample from './styleguide/examples/CKEditor.example';
import ActionMenuExample from './styleguide/examples/ActionMenu.example';
import RouteLinksExample from './styleguide/examples/RouteLinks.example';
import TableExample from './styleguide/examples/Table.example';
import InfoCardExample from './styleguide/examples/InfoCard.example';
import ClientCardExample from './styleguide/examples/ClientCard.example';



function App() {
  return (
    <div className="App">

      {/* NOT COMPATIBLE WITH REACT NATIVE */ }
      {/* fonts */}

      {/* Material icons */}
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

      {/* Font awesome */}
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" rel="stylesheet"></link>

      {/* Figtree regular */}
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;600&family=Roboto:wght@100;400&display=swap" rel="stylesheet"/>

      <section id="index" style={{flexDirection:"column",display: "flex" ,gap: 8}}>
        <h3>INDICE</h3>
        <a href='#fonts'>Fonts</a>
        <a href='#text_inputs'>Text Inputs</a>
        <a href='#select_inputs'>Select Inputs</a>
        <a href='#list_text_inputs'>List and Text Inputs</a>
        <a href='#list_text_inputs'>Multiline Text Inputs</a>
        <a href='#date_inputs'>Date Inputs</a>
        <a href='#time_inputs'>Time Inputs</a>
        <a href='#datetime_inputs'>Datetime Inputs</a>
        <a href='#switch_inputs'>Datetime Inputs</a>
        <a href='#actionables'>Actionables</a>
        <a href='#image_point_picker'>Image Point Picker Input</a>
        <a href='#multiple_selection_input'>Multiple Selection Input</a>
        <a href='#unique_selection_input'>Unique Selection Input</a>
        <a href='#multiple_select_input'>Multiple Select Input</a>
        <a href='#ckEditor_input'>CKEditor Input</a>
        <a href='#action_menu'>Action Menu</a>
        <a href='#route_links'>Route Links</a>
        <a href='#table'>Table</a>
        <a href='#cards'>Cards</a>
        
      </section>
      <section id="fonts">
       <h3>FUENTES</h3>
        <FontsExample></FontsExample>
      </section>
      {/*<section id='text_inputs'>   
      <h3>TEXT INPUT</h3>
        <TextExample></TextExample>
      </section>
      <section id='select_inputs'>   
      <h3>SELECT INPUT</h3>
        <SelectExample></SelectExample>
      </section>
      <section id='list_text_inputs'>   
      <h3>LIST AND TEXT INPUT</h3>
        <ListAndTextExample></ListAndTextExample>
      </section>   
      <section id='multiline_inputs'>   
      <h3>MULTILINE TEXT INPUT</h3>
        <MultilineExample></MultilineExample>
      </section>     
      <section id='date_inputs'>   
      <h3>DATE INPUT</h3>
        <DateExample></DateExample>
      </section>     
      <section id='time_inputs'>   
      <h3>TIME INPUT</h3>
        <TimeExample></TimeExample>
      </section>      
      <section id='datetime_inputs'>   
      <h3>DATETIME INPUT</h3>
        <DatetimeExample></DatetimeExample>
      </section>        
      <section id='switch_inputs'>   
      <h3>TOGGLE INPUT</h3>
        <ToggleExample></ToggleExample>
      </section> 
      <section id='actionables'>   
      <h3>Actionables</h3>
        <MainButtonExample></MainButtonExample>
      </section>        
      <section id='image_point_picker'>   
      <h3>Image Point Picker</h3>
        <ImagePointPickerExample/>
      </section>  
      <section id='multiple_selection_input'>   
      <h3>Multiple Selection</h3>
        <MultipleSelectionExample/>
      </section>   
      <section id='unique_selection_input'>   
      <h3>Unique Selection</h3>
        <UniqueSelectionExample/>
      </section>   
      <section id='multiple_select_input'>   
      <h3>Multiple Select</h3>
        <MultipleSelectExample/>
      </section>   
      <section id='ckEditor_input'>    
      <h3>CKEditor</h3>
        <CKEditorExample/>
      </section>                                           
      <section id='action_menu'>
        <h3>Action Menu</h3>
        <ActionMenuExample/>
      </section>
      <section id='route_links'>
        <h3>Route Links</h3>
        <RouteLinksExample/>
      </section> 
      <section id='table'>
        <h3>Table</h3>
        <TableExample/>
      </section>        
      <section id='cards'>
        <h3>Cards</h3>
        <div style={{display: 'flex', flexDirection: 'row', gap: 10}}>
      	  <ClientCardExample/>
          <InfoCardExample/>            
        </div>
        
      </section>   */}      
      <section id='image_point_picker'>   
      <h3>Image Point Picker</h3>
        <ImagePointPickerExample/>
      </section>       
    </div>
  );
}

export default App;

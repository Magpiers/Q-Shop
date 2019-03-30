import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { validationMessages } from '../../common/validationMessages';
import { IMyDpOptions } from 'mydatepicker';


@Component({
  selector: 'app-add-new-client',
  templateUrl: './add-new-client.component.html',
  styleUrls: ['./add-new-client.component.css']
})
export class AddNewClientComponent implements OnInit {

  addClientForm: FormGroup;
  billingClientForm: FormGroup;
  detailsSection: string;
  enableProceedBtn: boolean = true;
  enableProceedToBillingBtn: boolean;
  mytime: Date = new Date();
   myDatePickerOptions: IMyDpOptions = {
     dateFormat: 'dd.mm.yyyy',
     sunHighlight: true,
     markCurrentDay: true,
     disableUntil: { year: this.mytime.getUTCFullYear(), day: this.mytime.getUTCDate(), month: this.mytime.getUTCMonth() + 1 }
  };
  detailedComponentList: Array<object> = [];
  screensList: Array<object> = [{
    "id": "screen_one",
    "name": "screen_one",
    'isSelected': false
  }, {
    "id": "screen_two",
    "name": "screen_two",
    'isSelected': false
  }, {
    "id": "screen_three",
    "name": "screen_three",
    'isSelected': false
  }, {
    "id": "screen_four",
    "name": "screen_four",
    'isSelected': false
  }]
  componentsList: object = {
    "screen_one": [{
      "id": 1,
      "name": "comp_one",
      'isSelected': false,
      'description': 'A simple text field to capture GST Number'
    }, {
      "id": 2,
      "name": "comp_two",
      'isSelected': false,
      'description': 'A simple text field to capture Product detail'
    },
    {
      "id": 2,
      "name": "comp_three",
      'isSelected': false,
      'description': 'A radio button with customizable options'
    }, {
      "id": 2,
      "name": "comp_four",
      'isSelected': false,
      'description': 'A multi select text box'
    }, {
      "id": 2,
      "name": "comp_five",
      'isSelected': false,
      'description': 'User can get suggestions while entering data in this field(typeahead)'
    }, {
      "id": 2,
      "name": "comp_six",
      'isSelected': false,
      'description': 'A input field with date picker'
    }, {
      "id": 2,
      "name": "comp_seven",
      'isSelected': false,
      'description': 'A simple drop down with customizable options'
    }, {
      "id": 2,
      "name": "comp_eight",
      'isSelected': false,
      'description': 'A text field which accepts only numbers'
    }, {
      "id": 2,
      "name": "comp_two",
      'isSelected': false,
      'description': 'A simple text field that multiply the entered value with customizable value'
    }],
    "screen_two": [{
      "id": 1,
      "name": "comp_one",
      'isSelected': false,
      'description': 'A simple text field to capture GST Number'
    }, {
        "id": 2,
        "name": "comp_two",
        'isSelected': false,
        'description': 'A simple text field to capture Product detail'
      },
      {
        "id": 2,
        "name": "comp_three",
        'isSelected': false,
        'description': 'A radio button with customizable options'
      }, {
        "id": 2,
        "name": "comp_four",
        'isSelected': false,
        'description': 'A multi select text box'
      }, {
        "id": 2,
        "name": "comp_five",
        'isSelected': false,
        'description': 'User can get suggestions while entering data in this field(typeahead)'
      }
      // , {
      //   "id": 2,
      //   "name": "comp_six",
      //   'isSelected': false,
      //   'description': 'A input field with date picker'
      // }, {
      //   "id": 2,
      //   "name": "comp_seven",
      //   'isSelected': false,
      //   'description': 'A simple drop down with customizable options'
      // }, {
      //   "id": 2,
      //   "name": "comp_eight",
      //   'isSelected': false,
      //   'description': 'A text field which accepts only numbers'
      // }, {
      //   "id": 2,
      //   "name": "comp_two",
      //   'isSelected': false,
      //   'description': 'A simple text field that multiply the entered value with customizable value'
      // }
    ],
  };

  private validationConstraints = validationMessages;


  constructor(private fb: FormBuilder) {
    this.addClientForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      clientName: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
      ])],
      clientNumber: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ])],
      purpose: ['', Validators.compose([
        Validators.required,
      ])],
    });

    this.billingClientForm = this.fb.group({
      billingAddress: ['', Validators.compose([
        Validators.required,
      ])],
      contractPeriod: ['', Validators.compose([
        Validators.required,
      ])],
      currencyType: ['', Validators.compose([
        Validators.required,
      ])],
      datePicker: ['', Validators.compose([
        Validators.required,
      ])],
    });
  }

  ngOnInit() {
    this.detailsSection = 'CLIENT';
  }

  onClickSelectScreen(): void {
    this.detailsSection = 'SCREEN';
  }

  onChangeSelection(type: string): void {
    if (type === 'screen') {
      this.enableProceedBtn = true;
      this.screensList.forEach((li: object) => {
        if (li['isSelected']) {
          this.enableProceedBtn = false;
        }
      });
    } else {
      this.enableProceedToBillingBtn = false;
      this.detailedComponentList.forEach(cmp => {
        cmp['components'].forEach(c => {
          if (c['isSelected']) {
            this.enableProceedToBillingBtn = true;
          }
        });
      });
    }
    
  }

  onCLickProceed(): void {
    let tempArray = []
    this.screensList.forEach(sc => {
      if (sc['isSelected']) {
        const obj = {
          'name': sc['name'],
          'components': this.componentsList[sc['name']]
        };
        tempArray.push(obj);
      }
    });
    this.detailedComponentList = tempArray;
    this.detailsSection = 'COMPONENTS';
  }

  onClickProceedToBilling(): void {
    this.detailsSection = 'BILLING';
  }

}

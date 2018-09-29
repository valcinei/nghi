    @Component({
      selector: 'app-bank-account',
      inputs: ['bankName', 'id: account-id'],
      template: `
        Bank Name: {{ bankName }}
        Account Id: {{ id }}
      `
    })
    export class Src/--- {
      bankName: string|null = null;
      id: string|null = null;
     
      // this property is not bound, and won't be automatically updated by Angular
      normalizedBankName: string|null = null;
    }
     
    @Component({
      selector: 'app-my-input',
      template: `
        <app-bank-account
          bankName="RBC"
          account-id="4747">
        </app-bank-account>
      `
    })
    export class MyInputComponent {
    }
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Modal, IconSettings, Lookup, Input, Combobox } from '@salesforce/design-system-react';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isOpen: false,};
  }




    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <IconSettings iconPath="/icons">
            <div>
              <Button label="Request a Trial" onClick={() => this.setState({isOpen: !this.state.isOpen})}></Button>
              <Modal
                isOpen={this.state.isOpen}
                footer={[
                  <Button key='1' label="Cancel" onClick={() => this.setState({isOpen: !this.state.isOpen})} />,
                  <Button key='2' label="Save" variant="brand" onClick={() => this.setState({isOpen: !this.state.isOpen})} />,
                ]}
                onRequestClose={() => this.setState({isOpen: !this.state.isOpen})}
                size='large'
                tagline={
                  <span>
                    Register now and for thirty days you'll have full access to all the features and capabilities 
                    that make salesforce.com the world's most popular CRM.  

                    By signing up for a trial, you agree to the {' '}<a href="javascript:void(0)">Master License Subscription</a> and agree to share my details with Salesforce.com
                  </span>
                }
                title="New Trial Request"
              >
                <section className="slds-p-around--large">
                  <div className="slds-grid slds-gutters">
                    <div className="slds-col">
                      <div className="slds-form-element slds-m-bottom--large">
                        <Input
                          id="firstName"
                          label="First Name"
                          required
                          name="firstName"
                          type="text"
                        />
                      </div>
                      <div className="slds-form-element slds-m-bottom--large">
                        <Input
                          id="email"
                          label="Email"
                          required
                          name="email"
                          type="email"
                        />
                      </div>
                      <div className="slds-form-element slds-m-bottom--large">
                        <Input
                          id="phone"
                          label="Phone"
                          required
                          name="phone"
                          type="tel"
                        />
                      </div>
                      <div className="slds-form-element slds-m-bottom--large">
                        <Input
                          id="company"
                          label="Company"
                          required
                          name="company"
                          type="text"
                        />
                      </div>
                      <div className="slds-form-element slds-m-bottom--large">
                        <Input
                          id="uname"
                          label="Please enter a username of your choice in the form of an email"
                          required
                          name="company"
                          type="text"
                          placeholder="example: sara@trial.user or mike@my.trial"
                        />
                      </div>
                    </div>                
                    <div className="slds-col">
                      <div className="slds-form-element slds-m-bottom--large">
                        <Input
                          id="lastName"
                          label="Last Name"
                          required
                          name="lastName"
                          type="text"
                        />
                      </div>
                      <div className="slds-form-element slds-m-bottom--large">
                        <Combobox
                          id="contactPrefs"
                          events={{
                            onSelect: (event, data) => {
                              if (this.props.action) {
                                this.props.action('onSelect')(
                                  event,
                                  ...Object.keys(data).map((key) => data[key])
                                );
                              } else if (console) {
                                console.log('onSelect', event, data);
                              }
                              this.setState({
                                inputValue: '',
                                selection: data.selection,
                              });
                            },
                          }}
                          labels={{
                            label: 'Contact Preference',
                          }}
                          options={prefs}
                          selection={this.state.selection}
                          value={this.state.inputValue}
                          variant="readonly"
                          required
                        />
                      </div>
                      <div className="slds-form-element slds-m-bottom--large">
                        <Combobox
                          id="phoneType"
                          events={{
                            onSelect: (event, data) => {
                              if (this.props.action) {
                                this.props.action('onSelect')(
                                  event,
                                  ...Object.keys(data).map((key) => data[key])
                                );
                              } else if (console) {
                                console.log('onSelect', event, data);
                              }
                              this.setState({
                                inputValue: '',
                                selection: data.selection,
                              });
                            },
                          }}
                          labels={{
                            label: 'Phone Type',
                          }}
                          options={pTypes}
                          selection={this.state.selection}
                          value={this.state.inputValue}
                          variant="readonly"
                          required
                        />
                      </div>
                      <div className="slds-form-element slds-m-bottom--large">
                        <Combobox
                          id="country"
                          events={{
                            onSelect: (event, data) => {
                              if (this.props.action) {
                                this.props.action('onSelect')(
                                  event,
                                  ...Object.keys(data).map((key) => data[key])
                                );
                              } else if (console) {
                                console.log('onSelect', event, data);
                              }
                              this.setState({
                                inputValue: '',
                                selection: data.selection,
                              });
                              console.log('my selection: '+this.state.selection);
                            },
                          }}
                          labels={{
                            label: 'Country',
                          }}
                          options={countries}
                          selection={this.state.selection}
                          value={this.state.inputValue}
                          variant="readonly"
                          required
                        />
                      </div>
                    </div>
                  </div>    
                </section>
              </Modal>
            </div>
          </IconSettings>
        </div>
      );
    } 
}

const prefs = [
  {
    id: 'Email',
    label: 'Email',
  },
  {
    id: 'Phone',
    label: 'Phone',

  },
  {
    id: 'Text Message',
    label: "Text Message",
  },
];

const pTypes = [
  {
    id: 'Mobile',
    label: 'Mobile',
  },
  {
    id: 'Home',
    label: 'Home',

  },
  {
    id: 'Work',
    label: "Work",
  },
];

const countries = [
{ id: 'AF', label: 'Afghanistan', value: 'AF',},
{ id: 'AX', label: 'Aland Islands', value: 'AX',},
{ id: 'AL', label: 'Albania', value: 'AL',},
{ id: 'DZ', label: 'Algeria', value: 'DZ',},
{ id: 'AS', label: 'American Samoa', value: 'AS',},
{ id: 'AD', label: 'Andorra', value: 'AD',},
{ id: 'AO', label: 'Angola', value: 'AO',},
{ id: 'AI', label: 'Anguilla', value: 'AI',},
{ id: 'AQ', label: 'Antarctica', value: 'AQ',},
{ id: 'AG', label: 'Antigua and Barbuda', value: 'AG',},
{ id: 'AR', label: 'Argentina', value: 'AR',},
{ id: 'AM', label: 'Armenia', value: 'AM',},
{ id: 'AW', label: 'Aruba', value: 'AW',},
{ id: 'AU', label: 'Australia', value: 'AU',},
{ id: 'AT', label: 'Austria', value: 'AT',},
{ id: 'AZ', label: 'Azerbaijan', value: 'AZ',},
{ id: 'BS', label: 'Bahamas', value: 'BS',},
{ id: 'BH', label: 'Bahrain', value: 'BH',},
{ id: 'BD', label: 'Bangladesh', value: 'BD',},
{ id: 'BB', label: 'Barbados', value: 'BB',},
{ id: 'BY', label: 'Belarus', value: 'BY',},
{ id: 'BE', label: 'Belgium', value: 'BE',},
{ id: 'BZ', label: 'Belize', value: 'BZ',},
{ id: 'BJ', label: 'Benin', value: 'BJ',},
{ id: 'BM', label: 'Bermuda', value: 'BM',},
{ id: 'BT', label: 'Bhutan', value: 'BT',},
{ id: 'BO', label: 'Bolivia', value: 'BO',},
{ id: 'BA', label: 'Bosnia and Herzegovina', value: 'BA',},
{ id: 'BW', label: 'Botswana', value: 'BW',},
{ id: 'BV', label: 'Bouvet Island', value: 'BV',},
{ id: 'BR', label: 'Brazil', value: 'BR',},
{ id: 'VG', label: 'British Virgin Islands', value: 'VG',},
{ id: 'IO', label: 'British Indian Ocean Territory', value: 'IO',},
{ id: 'BN', label: 'Brunei Darussalam', value: 'BN',},
{ id: 'BG', label: 'Bulgaria', value: 'BG',},
{ id: 'BF', label: 'Burkina Faso', value: 'BF',},
{ id: 'BI', label: 'Burundi', value: 'BI',},
{ id: 'KH', label: 'Cambodia', value: 'KH',},
{ id: 'CM', label: 'Cameroon', value: 'CM',},
{ id: 'CA', label: 'Canada', value: 'CA',},
{ id: 'CV', label: 'Cape Verde', value: 'CV',},
{ id: 'KY', label: 'Cayman Islands', value: 'KY',},
{ id: 'CF', label: 'Central African Republic', value: 'CF',},
{ id: 'TD', label: 'Chad', value: 'TD',},
{ id: 'CL', label: 'Chile', value: 'CL',},
{ id: 'CN', label: 'China', value: 'CN',},
{ id: 'HK', label: 'Hong Kong, SAR China', value: 'HK',},
{ id: 'MO', label: 'Macao, SAR China', value: 'MO',},
{ id: 'CX', label: 'Christmas Island', value: 'CX',},
{ id: 'CC', label: 'Cocos (Keeling) Islands', value: 'CC',},
{ id: 'CO', label: 'Colombia', value: 'CO',},
{ id: 'KM', label: 'Comoros', value: 'KM',},
{ id: 'CG', label: 'Congo (Brazzaville)', value: 'CG',},
{ id: 'CD', label: 'Congo, (Kinshasa)', value: 'CD',},
{ id: 'CK', label: 'Cook Islands', value: 'CK',},
{ id: 'CR', label: 'Costa Rica', value: 'CR',},
{ id: 'CI', label: 'Cote dIvoire', value: 'CI',},
{ id: 'HR', label: 'Croatia', value: 'HR',},
{ id: 'CU', label: 'Cuba', value: 'CU',},
{ id: 'CY', label: 'Cyprus', value: 'CY',},
{ id: 'CZ', label: 'Czech Republic', value: 'CZ',},
{ id: 'DK', label: 'Denmark', value: 'DK',},
{ id: 'DJ', label: 'Djibouti', value: 'DJ',},
{ id: 'DM', label: 'Dominica', value: 'DM',},
{ id: 'DO', label: 'Dominican Republic', value: 'DO',},
{ id: 'EC', label: 'Ecuador', value: 'EC',},
{ id: 'EG', label: 'Egypt', value: 'EG',},
{ id: 'SV', label: 'El Salvador', value: 'SV',},
{ id: 'GQ', label: 'Equatorial Guinea', value: 'GQ',},
{ id: 'ER', label: 'Eritrea', value: 'ER',},
{ id: 'EE', label: 'Estonia', value: 'EE',},
{ id: 'ET', label: 'Ethiopia', value: 'ET',},
{ id: 'FK', label: 'Falkland Islands (Malvinas)', value: 'FK',},
{ id: 'FO', label: 'Faroe Islands', value: 'FO',},
{ id: 'FJ', label: 'Fiji', value: 'FJ',},
{ id: 'FI', label: 'Finland', value: 'FI',},
{ id: 'FR', label: 'France', value: 'FR',},
{ id: 'GF', label: 'French Guiana', value: 'GF',},
{ id: 'PF', label: 'French Polynesia', value: 'PF',},
{ id: 'TF', label: 'French Southern Territories', value: 'TF',},
{ id: 'GA', label: 'Gabon', value: 'GA',},
{ id: 'GM', label: 'Gambia', value: 'GM',},
{ id: 'GE', label: 'Georgia', value: 'GE',},
{ id: 'DE', label: 'Germany', value: 'DE',},
{ id: 'GH', label: 'Ghana', value: 'GH',},
{ id: 'GI', label: 'Gibraltar', value: 'GI',},
{ id: 'GR', label: 'Greece', value: 'GR',},
{ id: 'GL', label: 'Greenland', value: 'GL',},
{ id: 'GD', label: 'Grenada', value: 'GD',},
{ id: 'GP', label: 'Guadeloupe', value: 'GP',},
{ id: 'GU', label: 'Guam', value: 'GU',},
{ id: 'GT', label: 'Guatemala', value: 'GT',},
{ id: 'GG', label: 'Guernsey', value: 'GG',},
{ id: 'GN', label: 'Guinea', value: 'GN',},
{ id: 'GW', label: 'Guinea-Bissau', value: 'GW',},
{ id: 'GY', label: 'Guyana', value: 'GY',},
{ id: 'HT', label: 'Haiti', value: 'HT',},
{ id: 'HM', label: 'Heard and Mcdonald Islands', value: 'HM',},
{ id: 'VA', label: 'Holy See (Vatican City State)', value: 'VA',},
{ id: 'HN', label: 'Honduras', value: 'HN',},
{ id: 'HU', label: 'Hungary', value: 'HU',},
{ id: 'IS', label: 'Iceland', value: 'IS',},
{ id: 'IN', label: 'India', value: 'IN',},
{ id: 'ID', label: 'Indonesia', value: 'ID',},
{ id: 'IR', label: 'Iran, Islamic Republic of', value: 'IR',},
{ id: 'IQ', label: 'Iraq', value: 'IQ',},
{ id: 'IE', label: 'Ireland', value: 'IE',},
{ id: 'IM', label: 'Isle of Man', value: 'IM',},
{ id: 'IL', label: 'Israel', value: 'IL',},
{ id: 'IT', label: 'Italy', value: 'IT',},
{ id: 'JM', label: 'Jamaica', value: 'JM',},
{ id: 'JP', label: 'Japan', value: 'JP',},
{ id: 'JE', label: 'Jersey', value: 'JE',},
{ id: 'JO', label: 'Jordan', value: 'JO',},
{ id: 'KZ', label: 'Kazakhstan', value: 'KZ',},
{ id: 'KE', label: 'Kenya', value: 'KE',},
{ id: 'KI', label: 'Kiribati', value: 'KI',},
{ id: 'KP', label: 'Korea (North)', value: 'KP',},
{ id: 'KR', label: 'Korea (South)', value: 'KR',},
{ id: 'KW', label: 'Kuwait', value: 'KW',},
{ id: 'KG', label: 'Kyrgyzstan', value: 'KG',},
{ id: 'LA', label: 'Lao PDR', value: 'LA',},
{ id: 'LV', label: 'Latvia', value: 'LV',},
{ id: 'LB', label: 'Lebanon', value: 'LB',},
{ id: 'LS', label: 'Lesotho', value: 'LS',},
{ id: 'LR', label: 'Liberia', value: 'LR',},
{ id: 'LY', label: 'Libya', value: 'LY',},
{ id: 'LI', label: 'Liechtenstein', value: 'LI',},
{ id: 'LT', label: 'Lithuania', value: 'LT',},
{ id: 'LU', label: 'Luxembourg', value: 'LU',},
{ id: 'MK', label: 'Macedonia, Republic of', value: 'MK',},
{ id: 'MG', label: 'Madagascar', value: 'MG',},
{ id: 'MW', label: 'Malawi', value: 'MW',},
{ id: 'MY', label: 'Malaysia', value: 'MY',},
{ id: 'MV', label: 'Maldives', value: 'MV',},
{ id: 'ML', label: 'Mali', value: 'ML',},
{ id: 'MT', label: 'Malta', value: 'MT',},
{ id: 'MH', label: 'Marshall Islands', value: 'MH',},
{ id: 'MQ', label: 'Martinique', value: 'MQ',},
{ id: 'MR', label: 'Mauritania', value: 'MR',},
{ id: 'MU', label: 'Mauritius', value: 'MU',},
{ id: 'YT', label: 'Mayotte', value: 'YT',},
{ id: 'MX', label: 'Mexico', value: 'MX',},
{ id: 'FM', label: 'Micronesia, Federated States of', value: 'FM',},
{ id: 'MD', label: 'Moldova', value: 'MD',},
{ id: 'MC', label: 'Monaco', value: 'MC',},
{ id: 'MN', label: 'Mongolia', value: 'MN',},
{ id: 'ME', label: 'Montenegro', value: 'ME',},
{ id: 'MS', label: 'Montserrat', value: 'MS',},
{ id: 'MA', label: 'Morocco', value: 'MA',},
{ id: 'MZ', label: 'Mozambique', value: 'MZ',},
{ id: 'MM', label: 'Myanmar', value: 'MM',},
{ id: 'NA', label: 'Namibia', value: 'NA',},
{ id: 'NR', label: 'Nauru', value: 'NR',},
{ id: 'NP', label: 'Nepal', value: 'NP',},
{ id: 'NL', label: 'Netherlands', value: 'NL',},
{ id: 'AN', label: 'Netherlands Antilles', value: 'AN',},
{ id: 'NC', label: 'New Caledonia', value: 'NC',},
{ id: 'NZ', label: 'New Zealand', value: 'NZ',},
{ id: 'NI', label: 'Nicaragua', value: 'NI',},
{ id: 'NE', label: 'Niger', value: 'NE',},
{ id: 'NG', label: 'Nigeria', value: 'NG',},
{ id: 'NU', label: 'Niue', value: 'NU',},
{ id: 'NF', label: 'Norfolk Island', value: 'NF',},
{ id: 'MP', label: 'Northern Mariana Islands', value: 'MP',},
{ id: 'NO', label: 'Norway', value: 'NO',},
{ id: 'OM', label: 'Oman', value: 'OM',},
{ id: 'PK', label: 'Pakistan', value: 'PK',},
{ id: 'PW', label: 'Palau', value: 'PW',},
{ id: 'PS', label: 'Palestinian Territory', value: 'PS',},
{ id: 'PA', label: 'Panama', value: 'PA',},
{ id: 'PG', label: 'Papua New Guinea', value: 'PG',},
{ id: 'PY', label: 'Paraguay', value: 'PY',},
{ id: 'PE', label: 'Peru', value: 'PE',},
{ id: 'PH', label: 'Philippines', value: 'PH',},
{ id: 'PN', label: 'Pitcairn', value: 'PN',},
{ id: 'PL', label: 'Poland', value: 'PL',},
{ id: 'PT', label: 'Portugal', value: 'PT',},
{ id: 'PR', label: 'Puerto Rico', value: 'PR',},
{ id: 'QA', label: 'Qatar', value: 'QA',},
{ id: 'RE', label: 'R_union', value: 'RE',},
{ id: 'RO', label: 'Romania', value: 'RO',},
{ id: 'RU', label: 'Russian Federation', value: 'RU',},
{ id: 'RW', label: 'Rwanda', value: 'RW',},
{ id: 'BL', label: 'Saint-Barth_lemy', value: 'BL',},
{ id: 'SH', label: 'Saint Helena', value: 'SH',},
{ id: 'KN', label: 'Saint Kitts and Nevis', value: 'KN',},
{ id: 'LC', label: 'Saint Lucia', value: 'LC',},
{ id: 'MF', label: 'Saint-Martin (French part)', value: 'MF',},
{ id: 'PM', label: 'Saint Pierre and Miquelon', value: 'PM',},
{ id: 'VC', label: 'Saint Vincent and Grenadines', value: 'VC',},
{ id: 'WS', label: 'Samoa', value: 'WS',},
{ id: 'SM', label: 'San Marino', value: 'SM',},
{ id: 'ST', label: 'Sao Tome and Principe', value: 'ST',},
{ id: 'SA', label: 'Saudi Arabia', value: 'SA',},
{ id: 'SN', label: 'Senegal', value: 'SN',},
{ id: 'RS', label: 'Serbia', value: 'RS',},
{ id: 'SC', label: 'Seychelles', value: 'SC',},
{ id: 'SL', label: 'Sierra Leone', value: 'SL',},
{ id: 'SG', label: 'Singapore', value: 'SG',},
{ id: 'SK', label: 'Slovakia', value: 'SK',},
{ id: 'SI', label: 'Slovenia', value: 'SI',},
{ id: 'SB', label: 'Solomon Islands', value: 'SB',},
{ id: 'SO', label: 'Somalia', value: 'SO',},
{ id: 'ZA', label: 'South Africa', value: 'ZA',},
{ id: 'GS', label: 'South Georgia and the South Sandwich Islands', value: 'GS',},
{ id: 'SS', label: 'South Sudan', value: 'SS',},
{ id: 'ES', label: 'Spain', value: 'ES',},
{ id: 'LK', label: 'Sri Lanka', value: 'LK',},
{ id: 'SD', label: 'Sudan', value: 'SD',},
{ id: 'SR', label: 'Suriname', value: 'SR',},
{ id: 'SJ', label: 'Svalbard and Jan Mayen Islands', value: 'SJ',},
{ id: 'SZ', label: 'Swaziland', value: 'SZ',},
{ id: 'SE', label: 'Sweden', value: 'SE',},
{ id: 'CH', label: 'Switzerland', value: 'CH',},
{ id: 'SY', label: 'Syrian Arab Republic (Syria)', value: 'SY',},
{ id: 'TW', label: 'Taiwan, Republic of China', value: 'TW',},
{ id: 'TJ', label: 'Tajikistan', value: 'TJ',},
{ id: 'TZ', label: 'Tanzania, United Republic of', value: 'TZ',},
{ id: 'TH', label: 'Thailand', value: 'TH',},
{ id: 'TL', label: 'Timor-Leste', value: 'TL',},
{ id: 'TG', label: 'Togo', value: 'TG',},
{ id: 'TK', label: 'Tokelau', value: 'TK',},
{ id: 'TO', label: 'Tonga', value: 'TO',},
{ id: 'TT', label: 'Trinidad and Tobago', value: 'TT',},
{ id: 'TN', label: 'Tunisia', value: 'TN',},
{ id: 'TR', label: 'Turkey', value: 'TR',},
{ id: 'TM', label: 'Turkmenistan', value: 'TM',},
{ id: 'TC', label: 'Turks and Caicos Islands', value: 'TC',},
{ id: 'TV', label: 'Tuvalu', value: 'TV',},
{ id: 'UG', label: 'Uganda', value: 'UG',},
{ id: 'UA', label: 'Ukraine', value: 'UA',},
{ id: 'AE', label: 'United Arab Emirates', value: 'AE',},
{ id: 'GB', label: 'United Kingdom', value: 'GB',},
{ id: 'US', label: 'United States of America', value: 'US',},
{ id: 'UM', label: 'US Minor Outlying Islands', value: 'UM',},
{ id: 'UY', label: 'Uruguay', value: 'UY',},
{ id: 'UZ', label: 'Uzbekistan', value: 'UZ',},
{ id: 'VU', label: 'Vanuatu', value: 'VU',},
{ id: 'VE', label: 'Venezuela (Bolivarian Republic)', value: 'VE',},
{ id: 'VN', label: 'Viet Nam', value: 'VN',},
{ id: 'VI', label: 'Virgin Islands, US', value: 'VI',},
{ id: 'WF', label: 'Wallis and Futuna Islands', value: 'WF',},
{ id: 'EH', label: 'Western Sahara', value: 'EH',},
{ id: 'YE', label: 'Yemen', value: 'YE',},
{ id: 'ZM', label: 'Zambia', value: 'ZM',},
{ id: 'ZW', label: 'Zimbabwe', value: 'ZW',},

];

export default App;

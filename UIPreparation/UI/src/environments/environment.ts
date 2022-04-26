// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  getApiUrl: "https://mywebsite4004.azurewebsites.net/api",
  getDropDownSetting: {
    singleSelection: false,
    idField: "id",
    textField: "label",
    selectAllText: "Select All",
    unSelectAllText: "UnSelect All",
    itemsShowLimit: 3,
    allowSearchFilter: true,
  },
  getDatatableSettings: {
    pagingType: "full_numbers",
    pageLength: 2,
  },
};

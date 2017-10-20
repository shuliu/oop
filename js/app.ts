import { Observable } from "rxjs"; // Rx
import { configManagement } from './vendor/configManagement';

/** {string} configDir config 路徑 */
const extsDir = '/config/ext';

let configsOptions = {
    extsDir: '/config/ext',
    user: 'human'
};

let cm = new configManagement(configsOptions);

cm.getConfigs();
/*
if (IsCSharpFile(theFile)){
    HandleCSharpFile();
}
if (IsWordFile(theFile)){
    HandleWordFile();
}
if (IsJpgFile(theFile)){
    HandleJpgFile();
}
*/
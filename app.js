var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function getEmployees() {
    return __awaiter(this, void 0, void 0, function () {
        var inputElement, defaultUrl, response, mbody, table, thead, header_row, result, listEmployees, _i, listEmployees_1, element, row, cell_image, cell_id, cell_name, cell_salary, cell_age, img, result, employee, imageUrl, row_id, row_name, row_salary, row_age, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    inputElement = document.getElementById("emp-id");
                    defaultUrl = "http://dummy.restapiexample.com/api/v1/employees";
                    if (inputElement.value.length != 0) {
                        defaultUrl = "http://dummy.restapiexample.com/api/v1/employee/" + inputElement.value;
                    }
                    return [4 /*yield*/, fetch(defaultUrl, {
                            method: 'GET',
                            headers: {
                                Accept: 'application/json'
                            }
                        })];
                case 1:
                    response = _a.sent();
                    mbody = document.getElementById("main-body");
                    mbody.innerHTML = "";
                    if (!response.ok || response.status != 200) {
                        mbody.innerHTML = "<div class'error-number'>Error: " + response.status + "</div><div class='error-msg'>" + response.statusText + "</div>";
                        console.log(response);
                        throw new Error("Error! status: ".concat(response.status));
                    }
                    table = document.getElementById("result-table");
                    table.innerHTML = "";
                    if (!(inputElement.value.length === 0)) return [3 /*break*/, 3];
                    thead = table.createTHead();
                    header_row = thead.insertRow();
                    header_row.innerHTML = "<th width='10%'></th> <th width='5%'>ID</th><th width='40%'>Name</th><th width='15%'>Salary</th><th width='10%'>Age</th>";
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = (_a.sent());
                    if (result.data === null) {
                        mbody.innerHTML = "No record found";
                        return [2 /*return*/];
                    }
                    listEmployees = result.data;
                    for (_i = 0, listEmployees_1 = listEmployees; _i < listEmployees_1.length; _i++) {
                        element = listEmployees_1[_i];
                        row = table.insertRow();
                        cell_image = row.insertCell();
                        cell_id = row.insertCell();
                        cell_name = row.insertCell();
                        cell_salary = row.insertCell();
                        cell_age = row.insertCell();
                        img = document.createElement("img");
                        if (element.profile_image.toString().length == 0)
                            img.src = "noimg.png";
                        else
                            img.src = element.profile_image.toString();
                        img.width = 80;
                        img.height = 80;
                        cell_image.appendChild(img);
                        cell_id.appendChild(document.createTextNode(element.id.toString()));
                        cell_name.appendChild(document.createTextNode(element.employee_name.toString()));
                        cell_salary.appendChild(document.createTextNode(element.employee_salary.toString()));
                        cell_age.appendChild(document.createTextNode(element.employee_age.toString()));
                    }
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, response.json()];
                case 4:
                    result = (_a.sent());
                    if (result.data === null) {
                        mbody.innerHTML = "No record found";
                        return [2 /*return*/];
                    }
                    employee = result.data;
                    imageUrl = "noimg.png";
                    if (employee.profile_image.length > 0) {
                        imageUrl = employee.profile_image.toString();
                    }
                    mbody.innerHTML = "<center><img src='" + imageUrl + "' width='150px' height='200px'></center>";
                    console.log(mbody.innerHTML);
                    row_id = table.insertRow();
                    row_id.innerHTML = "<td style=''50%''>ID:</td><td>" + employee.id + "</td>";
                    row_name = table.insertRow();
                    row_name.innerHTML = "<td>Name:</td><td>" + employee.employee_name + "</td>";
                    row_salary = table.insertRow();
                    row_salary.innerHTML = "<td>Salary:</td><td>" + employee.employee_salary + "</td>";
                    row_age = table.insertRow();
                    row_age.innerHTML = "<td>Age:</td><td>" + employee.employee_age + "</td>";
                    _a.label = 5;
                case 5: return [2 /*return*/, 0];
                case 6:
                    error_1 = _a.sent();
                    if (error_1 instanceof Error) {
                        console.log('error message: ', error_1.message);
                        return [2 /*return*/, error_1.message];
                    }
                    else {
                        console.log('unexpected error: ', error_1);
                        return [2 /*return*/, 'An unexpected error occurred'];
                    }
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
getEmployees();

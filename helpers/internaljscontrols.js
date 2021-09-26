
import React from 'react'
import { components } from "react-select";
import createClass from "create-react-class";
import Select from "react-select";
import * as XLSX from 'xlsx';
import { ExportToCsv } from 'export-to-csv';
import * as _ from 'lodash';
export const Option = createClass({
    render() {
        return (
            <div>
                <components.Option {...this.props}>
                    <input
                        type="checkbox"
                        checked={this.props.isSelected}
                        onChange={e => null}
                    />{" "}
                    <label>{this.props.label} </label>
                </components.Option>
            </div>
        );
    }
});
export const DownloadExcel = (t, translatorKey, data, downloadName, omitKey, headerColumnMapping = null) => {
    const ws = XLSX.utils.json_to_sheet(omitKey ? _.map(data, function (x) { return _.omit(x, omitKey) }) : data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    const rangeKey = ws['!ref'] ? ws['!ref'] : '';
    if (rangeKey !== '') {
        const range = XLSX.utils.decode_range(rangeKey);
        for (let C = range.s.r; C <= range.e.c; ++C) {
            let address = XLSX.utils.encode_col(C) + "1"; // <-- first row, column number C
            if (!ws[address]) continue;
            ws[address].v = t ? t(translatorKey + ws[address].v) : (headerColumnMapping && headerColumnMapping[ws[address].v] ? headerColumnMapping[ws[address].v] : ws[address].v);
        }
    }
    XLSX.writeFile(wb, downloadName);
    return true;
}
export const DownloadCsv = (t, translatorKey, rawData, downloadName, omitKey) => {
    const data = omitKey ? _.map(rawData, function (x) { return _.omit(x, omitKey) }) : rawData;
    let keysData = Object.keys(data[0]);
    keysData = keysData.map(x => {
        return t ? t(translatorKey + x) : x;
    });

    const options = {
        filename: downloadName,
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalSeparator: '.',
        showLabels: true,
        useTextFile: false,
        useBom: true,
        useKeysAsHeaders: false,
        headers: keysData
    };
    const csvExporter = new ExportToCsv(options);
    csvExporter.generateCsv(data);
    return true;
}
export const validateFileData = async (validationSchema, data) => {
    let validateStatus = await validationSchema.isValid(data);
    return await validateStatus;
}
export const MultiValue = props => {
    return (
        <components.MultiValue {...props}>
            <span>{props.data.label}</span>
        </components.MultiValue>
    );
};

const selectStyles = {
    menuList: styles => ({ ...styles, maxHeight: '200px', msOverflowStyle: "auto", wordBreak: "break-all", border: "1px solid #CED4DA", borderRadius: "5px" })
};

export const MySelect = props => {
    if (props.allowSelectAll) {
        return (
            <Select
                menuPlacement="auto"
                {...props}
                isSearchable={props?.options?.length > 5}
                options={[props.allOption, ...props.options]}
                onChange={(selected, event) => {
                    if (selected !== null && selected.length > 0) {
                        let optiondata = [];
                        if (props.formatGroupLabel) {
                            props.options.forEach(x => {
                                optiondata = [...optiondata, ...x.options];
                                //  return;
                            })
                        }
                        else
                            optiondata = props.options;
                        if (selected[selected.length - 1][props.valueKey ? props.valueKey : 'value'] === props.allOption[props.valueKey ? props.valueKey : 'value']) {


                            return props.onChange([props.allOption, ...optiondata]);
                        }
                        let result = [];
                        if (selected.length === optiondata.length) {
                            if (selected.findIndex(x => x[props.valueKey ? props.valueKey : 'value'] === props.allOption[props.valueKey ? props.valueKey : 'value']) !== -1) {
                                result = selected.filter(option =>
                                    (props.getOptionValue ? option[props.valueKey ? props.valueKey : 'value'] : option.value) !== props.allOption[props.valueKey ? props.valueKey : 'value']
                                );
                            } else if (event.action === "select-option") {
                                result = [props.allOption, ...optiondata];
                            }

                            return props.onChange(result);
                        }
                    }
                    return props.onChange(selected);
                }}
            />
        );
    }

    return <Select styles={selectStyles} menuPlacement="auto" {...props} isSearchable={props?.options?.length > 5} />;
};


export const ValueContainer = ({ children, getValue, ...props }) => {

    let maxToShow = 2;
    let startitem = 0;
    let selectData = getValue();
    let index = selectData.findIndex(x => x[props.selectProps.valueKey ? props.selectProps.valueKey : 'value'] === props.selectProps.allOption[props.selectProps.valueKey ? props.selectProps.valueKey : 'value']);
    if (index !== -1) {
        startitem = 1;
        maxToShow = 3;
    }
    // let reactData = React.Children.toArray(children);
    let displayChips;
    if (selectData.length > 2) {
        let indval = 0;
        let childrenData = [];
        children.forEach(element => {
            if (indval === 0) {
                childrenData.push(element.slice(startitem, maxToShow));
                indval++;
            }
            else
                childrenData.push(element);
        });
        // children[0]=childrenData.slice(0, maxToShow)
        // childrenData.splice(0,1,childrenData.slice(0, maxToShow))

        displayChips = React.Children.toArray(childrenData);
    }
    else
        displayChips = React.Children.toArray(children)


    let shouldBadgeShow = selectData.length > maxToShow;
    let displayLength = selectData.length - maxToShow;

    return (
        <>
            <components.ValueContainer {...props}>

                {displayChips}
                <span>
                    {shouldBadgeShow &&
                        `+ ${displayLength} more`}
                </span>
            </components.ValueContainer>
        </>
    );
};

export const manageTokenTemplate = (tokenData) => {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Print tab</title>
        <style>
        .barcodeF{
          text-align: center;
          margin: auto;
        }
        //........Customized style.......
        </style>
      </head>
  <body onload="window.print();window.close()" class="barcodeF">${tokenData}</body>
    </html>
    `;
}
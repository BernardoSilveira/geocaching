let input_str = ""

document.getElementById("geo-submit").onclick = function () {

    input_str = document.getElementById("geo-input").value;

    const row_text_array = [
        ["našel 55 keší pro ", " druhů keší"],
        ["našel ", " keší ve všech velikostech"],
        ["našel ", " uhů keší v každém kraji"],
        ["našel 5 druhů keší v ", " státech"],
        ["poskládal ", " matrix"]
    ];
    const positions_array = [5, 11, 20, 36, 43];

    if (input_str !== "") {
        input_str = input_str.replace(/\s+/g, ' ').trim();
        const input_array = input_str.split(" ");

        positions_array.forEach(iterate_positions);

        document.getElementById("nickname").innerHTML = input_array[0];
        function iterate_positions(position, index, positions_array) {
            // console.log(position + ": " + index);
            const row_text = row_text_array[index];
            const row_data = input_array[position];
            row_id = "row" + index.toString();

            document.getElementById(row_id).innerHTML = row_text[0] + row_data + row_text[1];
        }

        // output_test = JSON.stringify(input_array);
        // console.log(output_test);
        // document.getElementById("geo-output").innerHTML = input_str;
    }
};




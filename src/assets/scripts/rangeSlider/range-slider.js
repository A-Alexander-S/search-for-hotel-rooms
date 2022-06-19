const rangeSlider = document.getElementById('range-slider');
if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [4000, 15000],
    connect: true,
    step: 1,
    range: {
      'min': 4000,
      'max': 15000
    }
  });

  const input0 = document.getElementById('input-0');
  const input1 = document.getElementById('input-1');
  const inputs = [input0, input1];

  // @ts-ignore
  rangeSlider.noUiSlider.on('update', function (values, handle) {
    //@ts-ignore
    inputs[handle].value = Math.round(values[handle]);
    // console.log(values)
  });

  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    console.log(arr);
    // @ts-ignore
    rangeSlider.noUiSlider.set(arr);
  };

  inputs.forEach((el, index) => {
    // @ts-ignore
    el.addEventListener('change', (e) => {
      // @ts-ignore
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}
# Calendar
A calendar component, based on jQuery. [Demo](http://yscoder.github.io/Calendar/demo.html)

---

## Depend

```
<link rel="stylesheet" href="calendar.css">
<script src="jquery.js"></script>
<script src="calendar.js"></script>
```

## Use

```
<div id="ca"></div>

$('#ca').calendar({
  // options
});
```
or
```
<input type="text" id="in">
<div id="ca"></div>

$('#in').calendar({
  trigger: '#ca'
  // options
});
```

## Options

* **width: 280**

    calendar width
* **height: 280**

    calendar height
* **zIndex: 1**

    calendar zIndex
* **trigger: null**

    Set the trigger selector，
* **offset: [0, 1]**

    offset position
* **customClass: ''**

    override class
* **view: 'date'**

    set display view, optional date or month
* **date: new Date()**

    set today
* **format: 'yyyy/mm/dd'**

    date format
* **startWeek: 0**

    default 0, first day of the week
* **weekArray: ['日', '一', '二', '三', '四', '五', '六']**

    can change to other
* **selectedRang: null**

    The optional time range.

    format: [ start date, end date]

    set today do not choose before: [new Date(), null] or ['2015/11/27']
* **data: null**

    Date of linked data.

    [{ date: string, value: object }, ... ]

* **label: '{d}\n{v}'**

    data show format, set false don't show.

    parameters: {d} date, {m} view, {v}, data
* **prev: '&lt;'**
* **next: '&gt;'**

    arrow characters
* **viewChange: $.noop**

    event callback for view change.

    parameters: view
* **onSelected: $.noop**

    event callback for selected.

    parameters: view, date, data
* **onMouseenter: $.noop**
* **onClose: $.noop**

    event callback for selected.
    parameters as above.


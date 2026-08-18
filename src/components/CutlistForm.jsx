import './CutlistForm.scss';

const UNITS = [
  'in',
  'cm',
  'mm',
];

function NumberField({
  label, name, value, onChange, min = 0, step = 0.125,
}) {
  return (
    <label className="cutlist-form__field">
      <span className="cutlist-form__label">{label}</span>
      <input
        min={min}
        name={name}
        step={step}
        type="number"
        value={value}
        onChange={(e) => onChange(name, e.target.value)} />
    </label>
  );
}

function CutlistForm({
  params, onChange,
}) {
  const handleNumberChange = (name, value) => {
    onChange({
      ...params,
      [name]: value === '' ? '' : Number(value),
    });
  };

  const handleUnitChange = (e) => {
    onChange({
      ...params,
      unit: e.target.value,
    });
  };

  return (
    <form className="cutlist-form" onSubmit={(e) => e.preventDefault()}>
      <fieldset className="cutlist-form__group">
        <legend>Object dimensions</legend>

        <div className="cutlist-form__row">
          <NumberField label="Length" name="length" value={params.length} onChange={handleNumberChange} />
          <NumberField label="Width" name="width" value={params.width} onChange={handleNumberChange} />
          <NumberField label="Height" name="height" value={params.height} onChange={handleNumberChange} />

          <label className="cutlist-form__field cutlist-form__field--unit">
            <span className="cutlist-form__label">Unit</span>
            <select value={params.unit} onChange={handleUnitChange}>
              {UNITS.map((unit) => (
                <option key={unit} value={unit}>{unit}</option>
              ))}
            </select>
          </label>
        </div>
      </fieldset>

      <fieldset className="cutlist-form__group">
        <legend>Settings</legend>

        <div className="cutlist-form__row">
          <NumberField
            label="Wood thickness"
            name="thickness"
            value={params.thickness}
            onChange={handleNumberChange} />
          <NumberField label="Gap" name="gap" value={params.gap} onChange={handleNumberChange} />
        </div>
      </fieldset>
    </form>
  );
}

export default CutlistForm;

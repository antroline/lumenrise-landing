import { MECHANISM_TONES } from '../data/mechanism-tones.ts'
import { MECHANISMS } from '../data/mechanisms.ts'
import { usePolicy } from '../hooks/usePolicy.ts'

export function MechanismOptions() {
  const { mechanism, setMechanism } = usePolicy()
  return (
    <fieldset className="mech-options">
      <legend className="sr-only">Launch mechanism</legend>
      {MECHANISMS.map((option) => (
        <label key={option.id} className="mech-option" data-tone={MECHANISM_TONES[option.id]}>
          <input
            type="radio"
            className="sr-only"
            name="mechanism"
            value={option.id}
            checked={option.id === mechanism.id}
            onChange={() => setMechanism(option.id)}
          />
          <span className="mech-rule" aria-hidden="true" />
          <span className="mech-name">{option.label}</span>
          <span className="mech-tagline">{option.tagline}</span>
          <span className="mech-summary">{option.summary}</span>
        </label>
      ))}
    </fieldset>
  )
}

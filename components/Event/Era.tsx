import EraIcon from "../eraIcon";

interface eraProps {
    filters: string[];
}
function Era({ filters }: eraProps) {
  if (filters.includes("Ancient")) {
    return (
      <div
        // style={{ background: this.props.theme.background }}
        className="citations"
      >
        <EraIcon icon="Ancient" />
      </div>
    );
  } else if (filters.includes("Medieval")) {
    return (
      <div className="citations">
        <EraIcon icon="Medieval" />
      </div>
    );
  } else if (filters.includes("Enlightenment")) {
    return (
      <div
        // style={{ background: this.props.theme.background }}
        className="citations"
      >
        <EraIcon icon="Enlightenment" />
      </div>
    );
  } else if (filters.includes("Industrial")) {
    return (
      <div
        // style={{ background: this.props.theme.background }}
        className="citations"
      >
        <EraIcon icon="Industrial" />
      </div>
    );
  } else if (filters.includes("EarlyComputing")) {
    return (
      <div
        // style={{ background: this.props.theme.background }}
        className="citations"
      >
        <EraIcon icon="EarlyComputing" />
      </div>
    );
  } else if (filters.includes("ModernComputing")) {
    return (
      <div
        // style={{ background: this.props.theme.background }}
        className="citations"
      >
        <EraIcon icon="ModernComputing" />
      </div>
    );
  } else if (filters.includes("InformationAge")) {
    return (
      <div
        // style={{ background: this.props.theme.background }}
        className="citations"
      >
        <EraIcon icon="InformationAge" />
      </div>
    );
  } else {
    return (
      <div
        // style={{ background: this.props.theme.background }}
        className="citations"
      >
        <p>N/A</p>
      </div>
    );
  }
}

export default Era;

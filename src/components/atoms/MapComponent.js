import styles from './MapComponent.module.css';

function MapComponent() {
  return (
        <div className="image has-text-centered">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1161.4262377297562!2d18.607262583376098!3d54.39492069488514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd74c8fa61b837%3A0x636f54aabf13e9a0!2sSklepzpiwem.pl!5e0!3m2!1spl!2spl!4v1683117863289!5m2!1spl!2spl"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={`box ${styles.map}`}
          />
    </div>
  );
}

export default MapComponent;

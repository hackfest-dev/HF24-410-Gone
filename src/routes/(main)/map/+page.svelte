<script>
    import "leaflet/dist/leaflet.css";
    //@ts-ignore
    import { Map, TileLayer, Marker, Popup } from "svelte-map-leaflet";

    const mapOptions = { center: [40.6852119, -74.0788838], zoom: 10 };
    const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const markerLatLng = [40.6852119, -74.0788838];
    const popupMessage = "Statue of Liberty National Monument";
</script>

<div class="map">
    <Map options={mapOptions}>
        <TileLayer url={tileUrl}></TileLayer>
        <Marker latLng={markerLatLng}>
            <Popup>{popupMessage}</Popup>
        </Marker>
    </Map>
</div>

<style>
    .map {
        height: 400px;
        width: 400px;
    }
</style>

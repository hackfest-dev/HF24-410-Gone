<script lang="ts">
    import "leaflet/dist/leaflet.css";
    import { onMount } from "svelte";
    //@ts-ignore
    import { Map, TileLayer, Marker, Popup } from "svelte-map-leaflet";

    const mapOptions = { center: [40.6852119, -74.0788838], zoom: 10 };
    const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const markerLatLng = [40.6852119, -74.0788838];
    const popupMessage = "Statue of Liberty National Monument";

    let posts: Post[] = [];
    onMount(() => {
        
    });
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
        width: 67rem;
        height: 500px;
        border-radius: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        background-color: #f0f0f0;
        overflow: hidden;
    }
</style>

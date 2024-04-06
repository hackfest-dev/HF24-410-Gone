<script lang="ts">
    import "leaflet/dist/leaflet.css";
    import { onMount } from "svelte";
    //@ts-ignore
    import { Map, TileLayer, Marker, Popup } from "svelte-map-leaflet";

    const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

    let posts: Post[] = [];
    let mapOptions = { center: [0, 0], zoom: 5 };
    onMount(async () => {
        await fetch("/api/get-posts")
            .then((response) => response.json())
            .then((data) => {
                posts = data.posts;
            });

        let average = posts.reduce(
            (p, c) => [c.lat + p[0], c.lang + p[1]],
            [0, 0],
        );
        let sum = [0, 0];

        for (const post of posts) {
            (sum[0] += post.lat), (sum[1] += post.lang);
        }

        mapOptions.center = [sum[0] / posts.length, sum[1] / posts.length];
    });
</script>

<div class="map">
    <Map options={mapOptions}>
        <TileLayer url={tileUrl}></TileLayer>
        {#each posts as post}
            <Marker latLng={[post.lat, post.lang]}>
                <Popup>
                    <div>
                        <h1>{post.title}</h1>
                    </div>
                </Popup>
            </Marker>
        {/each}
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

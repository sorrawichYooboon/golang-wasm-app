package main

import (
	"log"
	"net/http"
	"text/template"
)

func main() {
	tmpl, err := template.ParseFiles("templates/index.html")
	if err != nil {
		log.Fatal(err)
	}

	fs := http.FileServer(http.Dir("public/"))

	http.Handle("/public/", http.StripPrefix("/public/", fs))
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if err := tmpl.Execute(w, nil); err != nil {
			log.Fatal(err)
		}
	})

	if err := http.ListenAndServe(":9990", nil); err != nil {
		log.Fatal(err)
	}
}
